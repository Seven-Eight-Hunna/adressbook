const contacts = [
  {
    id: 1,
    name: "Kurt",
    surname: "Cobain",
    about: "Java Developer",
    gender: "male",
    mail: "kurtcobain@gmail.com",
    phone: "0706312495",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 2,
    name: "Janis",
    surname: "Joplin",
    about: "Best friend",
    gender: "female",
    mail: "janisjoplin@gmail.com",
    phone: "0902362954",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 3,
    name: "Jimi",
    surname: "Hendrix",
    about: "Guitar Legend",
    gender: "male",
    mail: "jimihendrix@gmail.com",
    phone: "0902362951",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 4,
    name: "Freddie",
    surname: "Mercury",
    about: "Queen Vocalist",
    gender: "male",
    mail: "freddiemercury@gmail.com",
    phone: "0902362952",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 5,
    name: "Robert",
    surname: "Plant",
    about: "Led Zeppelin Singer",
    gender: "male",
    mail: "robertplant@gmail.com",
    phone: "0902362953",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 6,
    name: "David",
    surname: "Bowie",
    about: "Rock Icon",
    gender: "male",
    mail: "davidbowie@gmail.com",
    phone: "0902362955",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 7,
    name: "Mick",
    surname: "Jagger",
    about: "Rolling Stones Frontman",
    gender: "male",
    mail: "mickjagger@gmail.com",
    phone: "0902362956",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 8,
    name: "Bruce",
    surname: "Springsteen",
    about: "The Boss",
    gender: "male",
    mail: "brucespringsteen@gmail.com",
    phone: "0902362957",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 9,
    name: "Elvis",
    surname: "Presley",
    about: "King of Rock and Roll",
    gender: "male",
    mail: "elvispresley@gmail.com",
    phone: "0902362958",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 10,
    name: "Steven",
    surname: "Tyler",
    about: "Aerosmith Vocalist",
    gender: "male",
    mail: "steventyler@gmail.com",
    phone: "0902362959",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 11,
    name: "Axl",
    surname: "Rose",
    about: "Guns N' Roses Singer",
    gender: "male",
    mail: "axlrose@gmail.com",
    phone: "0902362960",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 12,
    name: "Ozzy",
    surname: "Osbourne",
    about: "Prince of Darkness",
    gender: "male",
    mail: "ozzyosbourne@gmail.com",
    phone: "0902362961",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 13,
    name: "Jim",
    surname: "Morrison",
    about: "The Doors Frontman",
    gender: "male",
    mail: "jimmorrison@gmail.com",
    phone: "0902362962",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 14,
    name: "Eddie",
    surname: "Vedder",
    about: "Pearl Jam Singer",
    gender: "male",
    mail: "eddievedder@gmail.com",
    phone: "0902362963",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 15,
    name: "Brian",
    surname: "Johnson",
    about: "AC/DC Vocalist",
    gender: "male",
    mail: "brianjohnson@gmail.com",
    phone: "0902362964",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 16,
    name: "Jon",
    surname: "Bon Jovi",
    about: "Bon Jovi Frontman",
    gender: "male",
    mail: "jonbonjovi@gmail.com",
    phone: "0902362965",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 17,
    name: "Chris",
    surname: "Cornell",
    about: "Soundgarden Singer",
    gender: "male",
    mail: "chriscornell@gmail.com",
    phone: "0902362966",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 18,
    name: "Tina",
    surname: "Weymouth",
    about: "Talking Heads Bassist",
    gender: "female",
    mail: "tinaweymouth@gmail.com",
    phone: "0902362968",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 19,
    name: "Linda",
    surname: "Ronstadt",
    about: "Rock Legend",
    gender: "female",
    mail: "lindaronstadt@gmail.com",
    phone: "0902362969",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
  {
    id: 20,
    name: "Annie",
    surname: "Lennox",
    about: "Eurythmics Singer",
    gender: "female",
    mail: "annielennox@gmail.com",
    phone: "0902362970",
    creationDate: "2024-06-09T12:34:56.789Z",
  },
];
// окно диалога
const dialog = document.querySelector("#dialog");
const overlay = document.querySelector("#overlay");
// const addNewContact = document.querySelector("#addNewContact");

// форма в которой диалог
const formModal = document.querySelector("#formModal");
const gender = document.querySelector("#modalGender");
const addPhoto = document.querySelector("#addPhotoModal");
const photoContact = document.querySelector(".modal-content__addPhoto__img");

// форма поиска
const formSearch = document.querySelector("#formSearch");
const result = document.querySelector("#result");
const genderSelect = formSearch.querySelector("[name='gender']");
const sortSelect = formSearch.querySelector("[name='sort']");
const searchInput = formSearch.querySelector("[name='search']");
const openModalWin = document.querySelector("#openModalWin");
const contactCard = document.querySelector(".asideRight");

let lastCallArray = [];

//Превью только что загруженной картинки
const input = document.querySelector("#addPhotoModal");
const img = document.querySelector("#photo-preview");

// ВОТ ВОТ ВОТ

const BASE_URL = "http://std.bit-camp.ru:3000/";

//If res ok
async function getData(q) {
  try {
    const res = await fetch(`${BASE_URL}contacts${q}`);
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function renderData(q = "") {
  const data = await getData(q);
  lastCallArray = data.data;
  render(data.data);
}

async function createContact(formData) {
  try {
    const res = await fetch(BASE_URL + "contacts", {
      method: "POST",
      body: formData,
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function deleteContact(id) {
  try {
    const res = await fetch(BASE_URL + "contacts/" + id, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(res.status);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// async function initContact()

input.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    img.src = URL.createObjectURL(file);
  }
});

overlay.addEventListener("click", () => {
  dialog.close();
  console.log("fds");
});

// открыть форму
openModalWin.addEventListener("click", () => {
  dialog.showModal();
});
formSearch.addEventListener("submit", (evt) => {
  evt.preventDefault();
  renderData(
    `?search=${formSearch.search.value}&gender=${formSearch.gender.value}&filter=${formSearch.sort.value}`
  );
});

formModal.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Начальное отображение контактов
renderData();

formModal.addEventListener("submit", async (evt) => {
  evt.preventDefault();
  await createContact(new FormData(formModal));
  render(contacts);
  dialog.close();
});

// Обработчики событий для сортировки и фильтрации по полу
// genderSelect.addEventListener("change", applyFilters);
// sortSelect.addEventListener("change", applyFilters);
// searchInput.addEventListener("input", applyFilters);

// Функция фильтрации и сортировки
// function applyFilters() {
//   const searchValue = searchInput.value.toLowerCase();
//   const genderValue = genderSelect.value;
//   const sortValue = sortSelect.value;

//   filterAndSort(searchValue, genderValue, sortValue);
//   render(filteredContacts);
// }

// // Логика фильтрации и сортировки контактов
// function filterAndSort(searchInput, gender, sort) {
//   filteredContacts = [...contacts];

//   // gender
//   if (gender) {
//     filteredContacts = filteredContacts.filter(
//       (contact) => contact.gender === gender
//     );
//   }

//   // name surname
//   if (searchInput) {
//     filteredContacts = filteredContacts.filter(
//       (contact) =>
//         contact.name.toLowerCase().includes(searchInput) ||
//         contact.surname.toLowerCase().includes(searchInput)
//     );
//   }

//   switch (sort) {
//     case "a-z":
//       filteredContacts.sort((a, b) => a.name.localeCompare(b.name));
//       break;
//     case "z-a":
//       filteredContacts.sort((a, b) => b.name.localeCompare(a.name));
//       break;
//     case "oldest":
//       filteredContacts.sort(
//         (a, b) => new Date(a.creationDate) - new Date(b.creationDate)
//       );
//       break;
//     case "newest":
//       filteredContacts.sort(
//         (a, b) => new Date(b.creationDate) - new Date(a.creationDate)
//       );
//       break;
//     default:
//       break;
//   }
// }

function render(currentContacts, id) {
  result.innerHTML = "";

  currentContacts.forEach((obj) => {
    const li = document.createElement("li");
    if (obj.id === id) li.style.border = "solid 2px green";
    li.className = "contact";
    li.innerHTML = `<div class="contact__wrapper"><img
              src=${
                obj.image
                  ? BASE_URL + obj.image
                  : obj.gender === "male"
                  ? "./src/images/ava-men.png"
                  : "./src/images/ava-wom.png"
              }
              alt="аватарка контакта"
              class="contact__img"
            />
            <div class="contact__info">
              <p class="contact__info__name">${obj.name}</p>
              <p class="contact__info__status">${obj.about}</p>
            </div>
            </div>
            <div class="contact__wrapper2">
            <a href="tel:+71234567890" class="contact__number"
              >${obj.phone}</a
            >
            <a href="mailto:" class="contact__email">${obj.mail}</a>
            </div>`;

    li.addEventListener("click", () => {
      showContactCard(obj);
      render(lastCallArray, obj.id);
    });

    result.prepend(li);
  });
}

// aside right card contact
function showContactCard(contact) {
  contactCard.innerHTML = `
      <div class="asideRight__user">
      <img
        class="asideRight__user__photo"
                  src=${
                    contact.image
                      ? BASE_URL + contact.image
                      : contact.gender === "male"
                      ? "./src/images/ava-men.png"
                      : "./src/images/ava-wom.png"
                  }
        alt="photo"
      />
      <p class="asideRight__user__name">${contact.name} ${contact.surname}</p>
    </div>
    <button class="asideRight__editBtn">Delete contact</button>
    <div class="asideRight__link">
      <button class="asideRight__tel" onclick="window.location.href='tel:+${
        contact.phone
      }'">
        <img
          class="asideRight__tel__img"
          src="./src/images/telephone.png"
          alt="telephone icon"
        />
      </button>
      <button class="asideRight__email" onclick="window.location.href='mailto:${
        contact.mail
      }'">
        <img
          class="asideRight__email__img"
          src="./src/images/email.png"
          alt="email icon"
        />
      </button>
    </div>
    <div class="asideRight__date">
      <p class="asideRight__date__text">Date of create</p>
      <p class="asideRight__date__numbers">${new Date(
        contact.creationDate
      ).toLocaleDateString()}</p>
    </div>
  `;
  const deleteButton = contactCard.querySelector(".asideRight__editBtn");
  deleteButton.addEventListener("click", async () => {
    await deleteContact(contact.id);
    contactCard.innerHTML = `<p class="asideRight__user__name">Контакт Удален</p>`;
    renderData();
  });
}
