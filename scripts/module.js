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

    game.settings.register("control-highlight", "critColor", {
        name: 'Critical Dice Color',
        scope: 'client',
        type: String,
        default: "#008000",
        config: true,
        onChange: refresh
    });

    game.settings.register("control-highlight", "fumbleColor", {
        name: 'Fumble Dice Color',
        scope: 'client',
        type: String,
        default: "#ff0000",
        config: true,
        onChange: refresh
    });

    game.settings.register("control-highlight", "partyMode", {
        name: 'Party Mode',
        hint:  'Use at your own risk',
        scope: 'client',
        type: Boolean,
        default: false,
        config: true,
        onChange: refresh
    });

});

Hooks.on('renderSettingsConfig', (app, el, data) => {
    const BC = game.settings.get("control-highlight", "borderColor")
    const AL = game.settings.get("control-highlight", "activeLight")
    const AG = game.settings.get("control-highlight", "activeGlow")
    const CC = game.settings.get("control-highlight", "critColor")
    const FC = game.settings.get("control-highlight", "fumbleColor")
    el.find('[name="control-highlight.borderColor"]').parent().append(`<input type="color" value="${BC}" data-edit="control-highlight.borderColor">`)
    el.find('[name="control-highlight.activeLight"]').parent().append(`<input type="color" value="${AL}" data-edit="control-highlight.activeLight">`)
    el.find('[name="control-highlight.activeGlow"]').parent().append(`<input type="color"value="${AG}" data-edit="control-highlight.activeGlow">`)
    el.find('[name="control-highlight.critColor"]').parent().append(`<input type="color" value="${CC}" data-edit="control-highlight.critColor">`)
    el.find('[name="control-highlight.fumbleColor"]').parent().append(`<input type="color"value="${FC}" data-edit="control-highlight.fumbleColor">`)
});

Hooks.once('ready', refresh);


function refresh(){
    if(game.settings.get("control-highlight", "partyMode")){
        document.documentElement.style.setProperty('--myAnimation', "color-change 4s infinite");
    }
    else document.documentElement.style.setProperty('--myAnimation', "");

    const BC = game.settings.get("control-highlight", "borderColor")
    const BW = game.settings.get("control-highlight", "borderWidth")
    const AL = game.settings.get("control-highlight", "activeLight")
    const AG = game.settings.get("control-highlight", "activeGlow")
    const CC = game.settings.get("control-highlight", "critColor")
    const FC = game.settings.get("control-highlight", "fumbleColor")

    document.documentElement.style.setProperty('--myBorderColor', BC);
    document.documentElement.style.setProperty('--myBorderWidth', `${BW}px`);
    document.documentElement.style.setProperty('--myActiveLight', AL);
    document.documentElement.style.setProperty('--myActiveHighlight', AG);
    document.documentElement.style.setProperty('--myCriticalColor', CC);
    document.documentElement.style.setProperty('--myFumbleColor', FC);
}