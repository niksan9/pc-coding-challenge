# Plancraft Coding Challenge Niklas S.

## _A sophisticated chat input_

## Die Challenge

- Understand the given project
- Create a page for your chat
- Add a styled textarea to create a chat input field (textarea supports multiline)
- Create a neat input experience (check whatsapp or other chat tools)
- Show the message in the chat list above
- Think about a long list of messages à how do you solve the chat like inverted
  scrolling?

## Lösungsidee

_Der Fokus lag ganz klar auf dem Chat input. Daher gehe ich ausschließlich darauf ein._

#### Der Input sollte...

- ... beim Chat lesen nicht stören und daher möglichst unauffällig aber einfach erreichbar am unteren Ende des Bildschirms sein.
- ... sich bei der Eingabe für eine bessere Übersicht vergrößern.
- ... sich nach Senden einer Nachricht nicht schließen, da häufig mehrere Nachrichten hintereinander geschrieben werden.
- ... nie die letzten Nachrichten verdecken, weil diese beim Schreiben sehr wichtig sind.
- ... den "senden" button nur zeigen, wenn auch eine Nachricht gesendet werden kann.

### Herausforderungen während der Umsetzung

- Da Ionic für mich neu war, habe ich häufig workarounds genutzt, für die Ionic eine eingebaute Lösung bietet.
- Das invertierte Scrolling in einem Chat war anfangs etwas tricky, Ionic hilft mit Scrollmethoden allerdings gut aus.

### Das würde ich in production ändern

- Es werden alle Nachrichten in den Chat geladen. Hier müsste man natürlich pagination mit infinity scroll einbauen und mit Scroll events arbeiten.
- Da es eine Coding Challenge war, hält Chat.js im Grunde die gesamte Logik. Hier würde man natürlich auf einen globalen State zurückgreifen und könnte es in mehr Components aufteilen.

### Zusammenfassung

Es hat Spass gemacht, ein neues Framework zu entdecken und die Challenge zu lösen. Testen konnte ich das ganze leider nur auf einem Android Emulator, da läuft es aber wie gewünscht. Ich freue mich auf mehr!
