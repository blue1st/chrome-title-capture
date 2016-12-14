function load_setting() {
    return localStorage["pattern"] ? localStorage["pattern"] : '<a href="${url}"><image src="${favIconUrl}"></image>${title}</a>'
}

function save_setting(pattern) {
    localStorage["pattern"] = pattern;
}

