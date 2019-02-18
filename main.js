var notes = [];
var colos = ['blue', 'yellow', 'red'];

window.onload = function () {
  addButtonNewNote();

  for (let index = 10; index > 0; index--) {
    notes.push(`note ${index}`);
  }

  addNote();
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

  if (!newNote) {
    alert('Informe o texto da nota para criá-la.')
    return;
  }

  document.getElementById('text-note').value = '';

  removeField('text-note');
  removeField('create-note-btn');

  addNote(newNote);

  addButtonNewNote();
}

function removeField(field) {
  document.getElementById(field).remove();
}

function addHTML(name, html) {
  document.getElementById(name).innerHTML += html;
}

function addButtonNewNote() {
  addHTML(
    'create-note',
    '<input type="button" class="btn" id="nova-nota" onclick="newNote()" value="Nova Nota">'
  );
}

function addNote(note) {
  if (note) {
    notes.push(note);
  }

  const elements = document.getElementsByClassName("note");

  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }

  notes.forEach((note, index) => {
    addHTML('panel-notes',
      `<div class="note">
      ${note}
      <input type="button" class="btn btn-delete" id="delete-nota" onclick="deleteNote(${index})" value="X">
    <div/>`)
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  addNote();
}