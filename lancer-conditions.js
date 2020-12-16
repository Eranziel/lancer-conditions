import { registerSettings } from "./scripts/settings.js"
import { cancerCondStatIcons, hayleyCondStatIcons, pcIcons, npcIcons, utilIcons, cancerNPCIons, tommyCondStatIcons } from "./scripts/icons.js";

/* ------------------------------------ */
/* Initialize system				          	*/
/* ------------------------------------ */
Hooks.once('setup', async function() {
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
  const tommys = game.settings.get("lancer-conditions", "tommyConditionsStatus");

  let statuses = [];
  if (keepStock)    statuses = statuses.concat(CONFIG.statusEffects);
  if (cancercond)   statuses = statuses.concat(cancerCondStatIcons);
  if (cancernpc)    statuses = statuses.concat(cancerNPCIons);
  if (condStat)     statuses = statuses.concat(hayleyCondStatIcons);
  if (pc)           statuses = statuses.concat(pcIcons);
  if (npc)          statuses = statuses.concat(npcIcons);
  if (util)         statuses = statuses.concat(utilIcons);
  if (tommys)       statuses = statuses.concat(tommyCondStatIcons);

  /**
   * An array of status effect icons which can be applied to Tokens
   * @type {Array}
   */
  CONFIG.statusEffects = statuses;
}
