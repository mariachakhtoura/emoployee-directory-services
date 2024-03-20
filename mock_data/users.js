const USERS = [
  {
    id: '8bb34d2d-aa7d-46c6-b140-9bc3d55b19b3',
    gender: 'female',
    name: {
      title: 'Mademoiselle',
      first: 'Laurence',
      last: 'Moulin'
    },
    country: 'Switzerland',
    email: 'laurence.moulin@example.com',
    dob: '1988-01-13T05:39:22.029Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/84.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/84.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/84.jpg'
    }
  },
  {
    id: 'd2a2bf83-84d3-4c0a-95ef-6480b88678ce',
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Jon',
      last: 'Austin'
    },
    country: 'United Kingdom',
    email: 'jon.austin@example.com',
    dob: '1964-07-27T07:23:00.576Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/85.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/85.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/85.jpg'
    }
  },
  {
    id: '56768e54-5bdf-418d-a430-d154b19be327',
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Jolina',
      last: 'Helleman'
    },
    country: 'Netherlands',
    email: 'jolina.helleman@example.com',
    dob: '1945-07-20T11:06:28.831Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/81.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/81.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/81.jpg'
    }
  },
  {
    id: '9da9832d-a7fa-48f7-9fae-dcd82bdf1ec9',
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Alexandra',
      last: 'Roberts'
    },
    country: 'New Zealand',
    email: 'alexandra.roberts@example.com',
    dob: '1985-12-05T09:18:25.316Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/38.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/38.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/38.jpg'
    }
  },
  {
    id: '0a6a0a01-486b-4c87-9cca-e23a73ba82d9',
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Ahmet',
      last: 'Barbarosoğlu'
    },
    country: 'Turkey',
    email: 'ahmet.barbarosoglu@example.com',
    dob: '1952-08-05T12:32:52.910Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/58.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/58.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/58.jpg'
    }
  },
  {
    id: '65da0dc9-25b1-481d-8fe4-2a4456e1816f',
    gender: 'female',
    name: {
      title: 'Ms',
      first: 'Emily',
      last: 'Gill'
    },
    country: 'Canada',
    email: 'emily.gill@example.com',
    dob: '1961-11-29T23:17:31.480Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/36.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/36.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/36.jpg'
    }
  },
  {
    id: '5f6bcf81-925e-48b5-adbe-337aebb62406',
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Alvin',
      last: 'Riise'
    },
    country: 'Norway',
    email: 'alvin.riise@example.com',
    dob: '1994-08-02T21:50:29.896Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/14.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/14.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/14.jpg'
    }
  },
  {
    id: 'e9aa6184-b155-4495-b399-74fa5ea587d7',
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Fatma',
      last: 'Tekelioğlu'
    },
    country: 'Turkey',
    email: 'fatma.tekelioglu@example.com',
    dob: '1959-09-20T04:59:17.515Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/56.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/56.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/56.jpg'
    }
  },
  {
    id: '02e15aa0-5362-4a9b-b91c-4418b3a12370',
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Sergio',
      last: 'Bradley'
    },
    country: 'Australia',
    email: 'sergio.bradley@example.com',
    dob: '1981-06-16T18:42:01.626Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/96.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/96.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/96.jpg'
    }
  },
  {
    id: '70a30821-7ce2-45fb-ae76-9ee22241aad4',
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Ellie',
      last: 'Lambert'
    },
    country: 'Ireland',
    email: 'ellie.lambert@example.com',
    dob: '1985-06-26T02:14:50.634Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/63.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/63.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/63.jpg'
    }
  },
  {
    id: 'd3d55b05-be78-4b27-9b33-322df352c0a4',
    gender: 'male',
    name: {
      title: 'Mr',
      first: 'Silas',
      last: 'Jensen'
    },
    country: 'Denmark',
    email: 'silas.jensen@example.com',
    dob: '1952-01-18T09:42:44.710Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/84.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/84.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/84.jpg'
    }
  },
  {
    id: '340b4645-6d6a-49b9-a618-0ee94a3d8590',
    gender: 'female',
    name: {
      title: 'Mrs',
      first: 'Lola',
      last: 'Moulin'
    },
    country: 'France',
    email: 'lola.moulin@example.com',
    dob: '1989-05-02T18:11:21.442Z',
    picture: {
      large: 'https://randomuser.me/api/portraits/women/80.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/80.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/80.jpg'
    }
  }
]

module.exports = USERS
