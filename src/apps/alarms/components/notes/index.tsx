import {
  KeyboardEvent,
  KeyboardEventHandler,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useAlarmsState } from 'apps/alarms/state/provider';
import { cssModule } from 'auxiliary';
import { ALARM_SOURCE } from 'codegen/graphql';
import { Flex } from 'components';
import { Form, Icon, Text } from 'components/ui';
import { ExpandMore } from 'components/ui/Expander/src/ExpandMore/ExpandMore';

import { DEFAULT_OPTIONS } from './form.options';
import {
  NoteButton,
  NoteOption,
  NotesContainer,
  ArrowWrap,
  NoteSelector,
  collapsed_height,
  SaveWrapper,
} from './styles';

const AlarmNotes = ({
  alarm_id,
  alarm_source,
  instructions_acknowledged,
  quick_options_enabled = true,
}: {
  alarm_id: number;
  alarm_source: ALARM_SOURCE | undefined;
  instructions_acknowledged: boolean;
  quick_options_enabled?: boolean;
}) => {
  // const { session_user } = viewSessionUser();
  const expander_ref = useRef<HTMLDivElement>();

  const [notes_expanded, setNotesExpanded] = useState(false);

  const [current_note, setCurrentNotes] = useState('');

  const focus_input = useRef<HTMLTextAreaElement>();

  // useEffect(() => {
  //   if (instructions_acknowledged) {
  //     if (focus_input.current)
  //       focus_input.current.focus({ preventScroll: true });
  //   }
  // }, [instructions_acknowledged]);

  const { actions } = useAlarmsState();

  const onSaveNotes = async () => {
    if (alarm_source)
      await actions.updateAlarmNotes({
        alarm_id,
        alarm_source,
        notes: current_note,
      });

    setCurrentNotes('');
    setNotesExpanded(false);
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      await onSaveNotes();
    }
  };

  const handleSelectNote = (option: string) => {
    setCurrentNotes(prevNotes => {
      const nextLine = prevNotes ? ` ` : '';

      return `${prevNotes + nextLine}${option}`;
    });

    if (focus_input.current) focus_input.current.focus();
  };

  return (
    <NotesContainer>
      <ExpandMore
        collapsed_height={`${collapsed_height}px`}
        open={notes_expanded}
        ref={expander_ref as any}
      >
        <Flex direction="column" fitWidth>
          <Flex
            fitWidth
            gap="regular"
            style={{ paddingLeft: '1px', paddingTop: '1px' }}
          >
            <Form.FieldGroup>
              <Form.Field isTextArea marginTop={false}>
                <Form.Field.TextArea
                  id={alarm_id + 'notes-input'}
                  name={alarm_id + 'notes-input'}
                  onChange={e => setCurrentNotes(e.target.value)}
                  onKeyDown={handleKeyDown}
                  ref={focus_input as any}
                  rows={1}
                  style={{
                    paddingRight: '12rem',
                    resize: 'none',
                    whiteSpace: 'pre-wrap',
                    width: '100%',
                    borderRadius: '0.5rem',
                  }}
                  value={current_note}
                  // This is not the cleanest and should ideally
                  // be handled via a form save, since the enter key
                  // is prematurely removing the data. However, this
                  // should be sufficient for now
                />
                <SaveWrapper onClick={onSaveNotes}>
                  <Text as="span" style={{ lineHeight: 1 }}>
                    SAVE
                  </Text>
                </SaveWrapper>
              </Form.Field>
            </Form.FieldGroup>

            {quick_options_enabled && (
              <ArrowWrap onClick={() => setNotesExpanded(prev => !prev)}>
                <Icon.ArrowDown
                  className={cssModule(
                    'expander-arrow',
                    notes_expanded ? 'up' : 'down',
                  )}
                />
              </ArrowWrap>
            )}
          </Flex>

          {quick_options_enabled && (
            <NoteSelector>
              {DEFAULT_OPTIONS.map(option => (
                <NoteOption key={option}>
                  <NoteButton onClick={() => handleSelectNote(option)}>
                    <Text colorKey="secondary" size="labelRegular">
                      {option}
                    </Text>
                  </NoteButton>
                </NoteOption>
              ))}
            </NoteSelector>
          )}
        </Flex>
      </ExpandMore>
    </NotesContainer>
  );
};

export default memo(AlarmNotes);
