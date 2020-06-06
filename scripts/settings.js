export const registerSettings = function() {
  /**
   * Keep or replace stock icons
   */
  game.settings.register("lancer-conditions", "keepStockIcons", {
    name: "Keep Stock Icons",
    hint: "Keep stock Foundry status icons. The icons enabled in this module will be added to the stock icons.",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });

  /**
   * Use Cancermantis' conditions and status icons
   */
  game.settings.register("lancer-conditions", "cancerConditionsStatus", {
    name: "Cancermantis' Conditions & Status",
    hint: "Enable Cancermantis' icon set for conditions & status.",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });

  /**
   * Use Cancermantis' NPC template icons
   */
  game.settings.register("lancer-conditions", "cancerNPCTemplates", {
    name: "Cancermantis' NPC Templates",
    hint: "Enable Cancermantis' icon set for NPC templates.",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });

  /**
   * Use Hayley's conditions and status icons
   */
  game.settings.register("lancer-conditions", "hayleyConditionsStatus", {
    name: "Hayley's Condition & Status",
    hint: "Enable Hayley's icon set for conditions & status.",
    scope: "world",
    type: Boolean,
    config: true,
    default: true
  });

  /**
   * Use Hayley's PC systems icons
   */
  game.settings.register("lancer-conditions", "hayleyPC", {
    name: "Hayley's PC Systems",
    hint: "Enable Hayley's icon set for PC system effects.",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });

  /**
   * Use Hayley's NPC systems icons
   */
  game.settings.register("lancer-conditions", "hayleyNPC", {
    name: "Hayley's NPC Systems",
    hint: "Enable Hayley's icon set for NPC system effects.",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });

  /**
   * Use Hayley's utility icons
   */
  game.settings.register("lancer-conditions", "hayleyUtility", {
    name: "Hayley's Utility",
    hint: "Enable Hayley's icon set for utility indicators.",
    scope: "world",
    type: Boolean,
    config: true,
    default: false
  });


}
