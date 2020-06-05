import { registerSettings } from "./scripts/settings"
import { cancerIcons, condStatIcons, pcIcons, npcIcons, utilIcons } from "./scripts/icons";

/* ------------------------------------ */
/* Initialize system				          	*/
/* ------------------------------------ */
Hooks.once('init', async function() {
	console.log("Initializing Lancer Conditions module");
  registerSettings();
  setupIcons();
});

function setupIcons() {
  const keepStock = game.settings.get("lancer-conditions", "keepStockIcons");
  const cancermantis = game.settings.get("lancer-conditions", "cancermantis");
  const condStat = game.settings.get("lancer-conditions", "hayleyConditionStatus");
  const pc = game.settings.get("lancer-conditions", "hayleyPC");
  const npc = game.settings.get("lancer-conditions", "hayleyNPC");
  const util = game.settings.get("lancer-conditions", "hayleyUtility");

  let icons = [];
  if (keepStock)    icons = icons.concat(CONFIG.statusEffects);
  if (cancermantis) icons = icons.concat(cancerIcons);
  if (condStat)     icons = icons.concat(condStatIcons);
  if (pc)           icons = icons.concat(pcIcons);
  if (npc)          icons = icons.concat(npcIcons);
  if (util)         icons = icons.concat(utilIcons);

  /**
   * An array of status effect icons which can be applied to Tokens
   * @type {Array}
   */
  CONFIG.statusEffects = icons;

  // TODO: is this needed? What does it do?
  // Condition Types
  CONFIG.conditionTypes = {
    "burn": "Burn",
    "dangerzone": "Danger Zone",
    "downandout": "Down and Out",
    "engaged": "Engaged",
    "exposed": "Exposed",
    "flying": "Flying",
    "hidden": "Hidden",
    "immobilized": "Immobilized",
    "impaired": "Impaired",
    "jammed": "Jammed",
    "lockon": "Lock On",
    "prone": "Prone",
    "shredded": "Shredded",
    "shutdown": "Shut Down",
    "slowed": "Slowed",
    "stunned": "Stunned"
  };
}
