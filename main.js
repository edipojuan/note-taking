var notes = [];
var colos = ['#e6ffff', '#fff2e6', '#ebfaeb'];

window.onload = function () {
  addButtonNewNote();

  for (let index = 10; index > 0; index--) {
    notes.push({
      content: `note ${index}`,
      color: index % 2 === 0 ? '#e6ffff' : '#fff2e6'
    });
  }

  addAllNotes();
};

function newNote(params) {
  removeField('nova-nota');

  colos.forEach(color => {
    addHTML('create-note', `
      <div class="radio" style="background-color: ${color}">
        <input type="radio" name="colors" value="${color}">
      </div>
    `)
  });

  addHTML(
    'create-note',
    '<textarea id="text-note" cols="30" rows="4"></textarea>'
  );

  addHTML(
    'create-note',
    '<input type="button" class="btn" id="create-note-btn" onclick="createNote()" value="Criar Nota">'
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

function addNote(content) {
  if (content) {
    const color = getColor();
    notes = [...notes, {
      content,
      color
    }];
  }

  addAllNotes();
}

function addAllNotes() {
  deleteAllByClassName("note");

  notes.forEach((note, index) => {
    addHTML('panel-notes',
      `<div class="note" style="background-color: ${note.color}">
      ${note.content}
      <input type="button" class="btn btn-delete" id="delete-nota" onclick="deleteNote(${index})" value="X">
    <div/>`)
  });
}

function getColor() {
  const radios = document.getElementsByName('colors');

  let color = '#e6e6e6';

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      color = radios[i].value;
      break;
    }
  }

  deleteAllByClassName("radio");

  return color;
}

function deleteAllByClassName(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

function deleteNote(index) {
  notes.splice(index, 1);
  addAllNotes();
}