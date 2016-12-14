function load_setting() {
    return localStorage["pattern"] ? localStorage["pattern"] : '<a href="${url}"><img src="${favIconUrl}"></img>${title}</a>'
}

function save_setting(pattern) {
    localStorage["pattern"] = pattern;
}

