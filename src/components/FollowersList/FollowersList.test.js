import { render, screen, waitFor } from "@testing-library/react";

import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import FollowersList from "./FollowersList";

jest.mock("axios");

export const mockFollowers = [
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Kasper",
      last: "Karvonen",
    },
    location: {
      street: {
        number: 4374,
        name: "Reijolankatu",
      },
      city: "Kokemäki",
      state: "Kainuu",
      country: "Finland",
      postcode: 75223,
      coordinates: {
        latitude: "-10.7916",
        longitude: "-166.9131",
      },
      timezone: {
        offset: "+5:00",
        description: "Ekaterinburg, Islamabad, Karachi, Tashkent",
      },
    },
    email: "kasper.karvonen@example.com",
    login: {
      uuid: "64a6b53b-feae-4478-b4cb-08353abb9d56",
      username: "silverpanda127",
      password: "dell",
      salt: "06N6qDGo",
      md5: "fc88c121392e8d05898de41691f29039",
      sha1: "252ea3e7e5bec7e3c7ebcc9e7f15e82a2136b093",
      sha256:
        "9920ae4f3a1d6377eeb031c403a5d0f3890a3ca9dab21a086c3de8f154da9a6f",
    },
    dob: {
      date: "1974-07-11T09:02:26.883Z",
      age: 47,
    },
    registered: {
      date: "2005-10-14T12:06:37.066Z",
      age: 16,
    },
    phone: "03-677-683",
    cell: "043-684-64-42",
    id: {
      name: "HETU",
      value: "NaNNA235undefined",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/34.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
    },
    nat: "FI",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Annie",
      last: "Wiechert",
    },
    location: {
      street: {
        number: 3473,
        name: "Kiefernweg",
      },
      city: "Lünen",
      state: "Sachsen",
      country: "Germany",
      postcode: 92188,
      coordinates: {
        latitude: "22.3867",
        longitude: "109.7049",
      },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "annie.wiechert@example.com",
    login: {
      uuid: "6b663469-4d1f-4d25-b8ce-45f854604f08",
      username: "yellowbird556",
      password: "cubbies",
      salt: "sv8Huqxd",
      md5: "702f4dbf131a6f23dc3e659a75d43c6f",
      sha1: "13b8dcbbc35c354ceb404e0d63787e2991b8e312",
      sha256:
        "d737bfef646fa51d214f909bd194162e09c76cdb640b0ca036b34baf0b43fd6e",
    },
    dob: {
      date: "1989-03-16T11:32:08.082Z",
      age: 32,
    },
    registered: {
      date: "2007-12-19T03:32:28.769Z",
      age: 14,
    },
    phone: "0079-6500096",
    cell: "0179-0596057",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/46.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/46.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/46.jpg",
    },
    nat: "DE",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Lucy",
      last: "Obrien",
    },
    location: {
      street: {
        number: 4869,
        name: "Church Street",
      },
      city: "Truro",
      state: "Hampshire",
      country: "United Kingdom",
      postcode: "NB1 0QB",
      coordinates: {
        latitude: "58.2487",
        longitude: "-61.8933",
      },
      timezone: {
        offset: "-9:00",
        description: "Alaska",
      },
    },
    email: "lucy.obrien@example.com",
    login: {
      uuid: "70beb800-0faf-418f-a08b-8aaac172e74e",
      username: "whitekoala568",
      password: "barton",
      salt: "5IKOCCOC",
      md5: "5992a0324b5748db82aecba9afdf9059",
      sha1: "6cc0aeed624f9a9c37c5147d65183c17cfc65460",
      sha256:
        "8267cc76999cd86f5d79be3edf0806583d18bdd55688aea4acd6acaa2c50cb4c",
    },
    dob: {
      date: "1980-12-27T15:23:56.193Z",
      age: 41,
    },
    registered: {
      date: "2006-10-02T11:35:17.514Z",
      age: 15,
    },
    phone: "017684 60582",
    cell: "0707-193-754",
    id: {
      name: "NINO",
      value: "OC 26 84 16 D",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/93.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/93.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/93.jpg",
    },
    nat: "GB",
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Emile",
      last: "Anderson",
    },
    location: {
      street: {
        number: 4627,
        name: "Grand Marais Ave",
      },
      city: "Enterprise",
      state: "Québec",
      country: "Canada",
      postcode: "H5L 4D0",
      coordinates: {
        latitude: "10.1794",
        longitude: "32.0099",
      },
      timezone: {
        offset: "+7:00",
        description: "Bangkok, Hanoi, Jakarta",
      },
    },
    email: "emile.anderson@example.com",
    login: {
      uuid: "a77a71f7-8a4f-4fec-82d1-c4c66bfa7959",
      username: "blueleopard333",
      password: "virus",
      salt: "WA8AZE71",
      md5: "2c4b563636f0fb6ae6148a56f380a00e",
      sha1: "9edcdc826b215bb7eb69d8f691316ba0944516cc",
      sha256:
        "00b468aac282bf38941ffa13c1ea557bedf86eafff1b7c243f32a4abce0c81ec",
    },
    dob: {
      date: "1965-01-16T16:55:09.445Z",
      age: 56,
    },
    registered: {
      date: "2015-02-12T16:34:21.894Z",
      age: 6,
    },
    phone: "701-207-6356",
    cell: "084-659-8067",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/51.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/51.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/51.jpg",
    },
    nat: "CA",
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Sarah",
      last: "Patel",
    },
    location: {
      street: {
        number: 3548,
        name: "Anzac Parade",
      },
      city: "Rotorua",
      state: "Gisborne",
      country: "New Zealand",
      postcode: 15920,
      coordinates: {
        latitude: "-0.3984",
        longitude: "96.2289",
      },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "sarah.patel@example.com",
    login: {
      uuid: "19a2bc9d-0f84-4e03-b6a1-8c89bff37af9",
      username: "whitebear676",
      password: "yankees2",
      salt: "tzV6DB5b",
      md5: "43f1d2406e31513453c65bdf3f529957",
      sha1: "a17f46e3c2ea0a9d02cb6c58f342d4ef9497adab",
      sha256:
        "89544b87a2c825e0e4ae14f028c1dc1f824155996bc056301da1d17c2657e23b",
    },
    dob: {
      date: "1990-05-08T17:23:08.922Z",
      age: 31,
    },
    registered: {
      date: "2003-07-17T10:27:12.753Z",
      age: 18,
    },
    phone: "(759)-645-3681",
    cell: "(473)-756-6065",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/17.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
    },
    nat: "NZ",
  },
];

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Followers list", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        results: mockFollowers,
      },
    });
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it("should render the element", () => {
    render(<MockFollowersList />);
    const list = screen.getByRole("list", {
      name: "followers",
    });
    expect(list).toBeInTheDocument();
  });

  // it("it displays a row for each user", async () => {
  //   axios.get.mockResolvedValue({ data: mockFollowers });
  //   render(<MockFollowersList />);

  //   const userList = await waitFor(() => screen.findAllByTestId("user-item"));
  //   expect(userList).toHaveLength(2);
  // });
});
