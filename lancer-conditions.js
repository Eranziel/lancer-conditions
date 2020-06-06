import { registerSettings } from "./scripts/settings.js"
import { cancerCondStatIcons, hayleyCondStatIcons, pcIcons, npcIcons, utilIcons, cancerNPCIons } from "./scripts/icons.js";

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
  const cancercond = game.settings.get("lancer-conditions", "cancerConditionsStatus");
  const cancernpc = game.settings.get("lancer-conditions", "cancerNPCTemplates");
  const condStat = game.settings.get("lancer-conditions", "hayleyConditionsStatus");
  const pc = game.settings.get("lancer-conditions", "hayleyPC");
  const npc = game.settings.get("lancer-conditions", "hayleyNPC");
  const util = game.settings.get("lancer-conditions", "hayleyUtility");

  let icons = [];
  if (keepStock)    icons = icons.concat(CONFIG.statusEffects);
  if (cancercond)   icons = icons.concat(cancerCondStatIcons);
  if (cancernpc)    icons = icons.concat(cancerNPCIons);
  if (condStat)     icons = icons.concat(hayleyCondStatIcons);
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
