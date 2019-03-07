var g_themes = [
    ['', '原始主题', 'css/default.css', '.'],
    ['initial', '原始主题', 'css/default.css', '.'],
    ['default', '缺省主题', 'themes/default/css/default.css', 'themes/default'],
    ['autumn', '秋季主题', 'themes/autumn/css/autumn.css', 'themes/autumn'],
    ['default_sm', '缺省主题-小屏', 'themes/default/css/default_sm.css', 'themes/default'],
    ['autumn_sm', '秋季主题-小屏', 'themes/autumn/css/autumn_sm.css', 'themes/autumn']
]

function ChangeTheme(theme) {
    for(var i=0; i<g_themes.length; i++) {
        if (theme === g_themes[i][0]) {
            document.getElementById('activeTheme').href = g_themes[i][2];
            return g_themes[i];
        }
    }
}