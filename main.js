var notes = ['nota 1', 'nota 2', 'nota 3', 'nota 4', 'nota 5'];
// var notes = [];
var colos = ['blue', 'yellow', 'red'];

window.onload = function() {
  addButtonNewnote();

  notes.map((note) => {
    addNote(note);
  });
};

function newNote(params) {
  removeField('nova-nota');

  addHTML(
    'create-note',
    '<textarea id="text-note" cols="30" rows="4"></textarea>'
  );
  addHTML(
    'create-note',
    '<input type="button" class="btn" id="create-note-btn" onclick="return createNote()" value="Criar Nota">'
  );
}

function createNote() {
  const newNote = document.getElementById('text-note').value;

  if (!newNote) return;

  document.getElementById('text-note').value = '';

  removeField('text-note');
  removeField('create-note-btn');

  addNote(newNote);

  addButtonNewnote();
}

function removeField(field) {
  document.getElementById(field).remove();
}

function addHTML(name, html) {
  document.getElementById(name).innerHTML += html;
}

function addButtonNewnote() {
  addHTML(
    'create-note',
    '<input type="button" class="btn" id="nova-nota" onclick="newNote()" value="Nova Nota"></input>'
  );
}

function addNote(note) {
  addHTML(
    'panel-notes',
    '<div class="note">' +
      note +
      '<input type="button" class="btn btn-delete" id="clear-nota" onclick="clearNote()" value="X"></input><div/>'
  );
}
