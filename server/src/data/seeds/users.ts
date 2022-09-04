import { hashSync } from "bcryptjs";
import UserInterface from "./../../interfaces/User";

const users: UserInterface[] = [
    {
        name: "Orsolya Sebestyen",
        email: "elfromka@gmail.com",
        password: hashSync("7fW5pQxA2iv4PtJ", 10),
        isAdmin: true,
    },
    {
        name: "Barry Cade",
        email: "barry.cade@notreal.com",
        password: hashSync("123456789", 10),
        isAdmin: false,
    },
    {
        name: "Ella Vader",
        email: "ella.vader@notrealeither.com",
        password: hashSync("123456789", 10),
        isAdmin: false,
    },
];

export default users;
