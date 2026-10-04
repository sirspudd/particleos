/*
    SPDX-License-Identifier: LGPL-2.1-or-later

    The skel appletsrc only carries the black desktop. Its presence means
    Plasma will not run org.kde.breeze.desktop's layout script, so a new
    session would otherwise have no panel. An older skel revision also
    created an empty bottom panel, which Plasma shows as "Add Widgets".
*/

var existing = panels()
var populated = false
var empty = []

for (var i = 0; i < existing.length; ++i) {
    var ids = existing[i].widgetIds
    if (ids && ids.length > 0) {
        populated = true
    } else {
        empty.push(existing[i])
    }
}

for (var j = 0; j < empty.length; ++j) {
    empty[j].remove()
}

if (!populated) {
    loadTemplate("org.kde.plasma.desktop.defaultPanel")
}
