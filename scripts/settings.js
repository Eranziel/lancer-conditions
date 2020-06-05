export const registerSettings = function() {
  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("lancer-conditions", "keepStockIcons", {
    name: "Keep Stock Icons",
    scope: "world",
    type: Boolean,
    default: false
  });

  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("lancer-conditions", "cancermantis", {
    name: "Use Cancermantis' Icons",
    scope: "world",
    type: Boolean,
    default: false
  });

  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("lancer-conditions", "hayleyConditionsStatus", {
    name: "Use Hayley's Condition and Status Icons",
    scope: "world",
    type: Boolean,
    default: true
  });

  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("lancer-conditions", "hayleyPC", {
    name: "Use Hayley's PC System Icons",
    scope: "world",
    type: Boolean,
    default: false
  });

  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("lancer-conditions", "hayleyNPC", {
    name: "Use Hayley's NPC System Icons",
    scope: "world",
    type: Boolean,
    default: false
  });

  /**
   * Track the system version upon which point a migration was last applied
   */
  game.settings.register("lancer-conditions", "hayleyUtility", {
    name: "Use Hayley's Utility Icons",
    scope: "world",
    type: Boolean,
    default: false
  });


}
