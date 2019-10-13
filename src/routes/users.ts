export const Users = [{
    method: "get",
    route: "/users",
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    action: "one"
}, {
    method: "post",
    route: "/users",
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    action: "remove"
}, {
    method: "post",
    route: "/fd",
    action: "fd"
}, {
    method: "put",
    route: "/fd",
    action: "fd"
}, {
    method: "get",
    route: "/fd",
    action: "fd"
}, ];