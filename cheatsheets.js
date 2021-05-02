module.exports = [
    {
        title: "Getting Started",
        collapsable: false,
        children: ["introduction"],
    },
    {
        title: "Nova",
        collapsable: false,
        children: prefix("nova", ["commands"]),
    },
    {
        title: "Laravel",
        collapsable: false,
        children: prefix("laravel", [
            "models",
            "migrations",
            "common-commands",
            "forms",
            "http-client",
            "mails",
            "sessions",
        ]),
    },
    {
        title: "Composer",
        collapsable: false,
        children: prefix("composer", ["composer"]),
    },
];

function prefix(prefix, children) {
    return children.map((child) => `${prefix}/${child}`);
}
