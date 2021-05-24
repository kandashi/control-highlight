Hooks.once('init', async function() {
    game.settings.register("control-highlight", "borderColor", {
        name: 'Icon Border Color',
        scope: 'client',
        type: String,
        default: "#000000",
        config: true,
        onChange: refresh
    });
    game.settings.register("control-highlight", "borderWidth", {
        name: 'Icon Border Width',
        scope: 'client',
        type: Number,
        default: 0.5,
        config: true,
        onChange: refresh
    });

    game.settings.register("control-highlight", "activeLight", {
        name: 'Active Highlight Color',
        scope: 'client',
        type: String,
        default: "#ff0000",
        config: true,
        onChange: refresh
    });

    game.settings.register("control-highlight", "activeGlow", {
        name: 'Active Glow Color',
        scope: 'client',
        type: String,
        default: "#ff6400",
        config: true,
        onChange: refresh
    });


});

Hooks.on('renderSettingsConfig', (app, el, data) => {
    const BC = game.settings.get("control-highlight", "borderColor")
    const AL = game.settings.get("control-highlight", "activeLight")
    const AG = game.settings.get("control-highlight", "activeGlow")
    el.find('[name="control-highlight.borderColor"]').parent().append(`<input type="color" value="${BC}" data-edit="control-highlight.borderColor">`)
    el.find('[name="control-highlight.activeLight"]').parent().append(`<input type="color" value="${AL}" data-edit="control-highlight.activeLight">`)
    el.find('[name="control-highlight.activeGlow"]').parent().append(`<input type="color"value="${AG}" data-edit="control-highlight.activeGlow">`)
});

Hooks.once('ready', refresh);


function refresh(){
    const BC = game.settings.get("control-highlight", "borderColor")
    const BW = game.settings.get("control-highlight", "borderWidth")
    const AL = game.settings.get("control-highlight", "activeLight")
    const AG = game.settings.get("control-highlight", "activeGlow")

    document.documentElement.style.setProperty('--myBorderColor', BC);
    document.documentElement.style.setProperty('--myBorderWidth', `${BW}px`);
    document.documentElement.style.setProperty('--myActiveLight', AL);
    document.documentElement.style.setProperty('--myActiveHighlight', AG);
}