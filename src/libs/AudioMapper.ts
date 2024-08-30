export const FILE_MAP = {
  "8BIT Early Background": "8BIT_E_BG.ogg",
  "8BIT Early Lead": "8BIT_E_L.ogg",
  "8BIT Late Background": "8BIT_L_BG.ogg",
  "8BIT Late Lead": "8BIT_L_L.ogg",

  "COUNTRY Early Background": "COUNTRY_E_BG.ogg",
  "COUNTRY Early Lead": "COUNTRY_E_L.ogg",
  "COUNTRY Late Background": "COUNTRY_L_BG.ogg",
  "COUNTRY Late Lead": "COUNTRY_L_L.ogg",

  "DISCO Early Background": "DISCO_E_BG.ogg",
  "DISCO Early Lead": "DISCO_E_L.ogg",
  "DISCO Late Background": "DISCO_L_BG.ogg",
  "DISCO Late Lead": "DISCO_L_L.ogg",

  "EDM Early Background": "EDM_E_BG.ogg",
  "EDM Early Lead": "EDM_E_L.ogg",
  "EDM Late Background": "EDM_L_BG.ogg",
  "EDM Late Lead": "EDM_L_L.ogg",

  "EMO Early Background": "EMO_E_BG.ogg",
  "EMO Early Lead": "EMO_E_L.ogg",
  "EMO Late Background": "EMO_L_BG.ogg",
  "EMO Late Lead": "EMO_L_L.ogg",

  "HEARTSTEEL Early Background 1": "HEARTSTEEL_E_BG_1.ogg",
  "HEARTSTEEL Early Background 2": "HEARTSTEEL_E_BG_2.ogg",
  "HEARTSTEEL Early Lead": "HEARTSTEEL_E_L.ogg",
  "HEARTSTEEL Late Background 1": "HEARTSTEEL_L_BG_1.ogg",
  "HEARTSTEEL Late Background 2": "HEARTSTEEL_L_BG_2.ogg",
  "HEARTSTEEL Late Lead": "HEARTSTEEL_L_L.ogg",

  "HYPERPOP Early Lead": "HYPERPOP_E_L.ogg",
  "HYPERPOP Late Lead": "HYPERPOP_L_L.ogg",

  "ILLBEAT Early Lead": "ILLBEAT_E_L.ogg",
  "ILLBEAT Late Lead": "ILLBEAT_L_L.ogg",

  "JAZZ Early Lead": "JAZZ_E_L.ogg",
  "JAZZ Late Lead": "JAZZ_L_L.ogg",

  "KDA Early Background 1": "KDA_E_BG_1.ogg",
  "KDA Early Background 2": "KDA_E_BG_2.ogg",
  "KDA Early Lead": "KDA_E_L.ogg",
  "KDA Late Background 1": "KDA_L_BG_1.ogg",
  "KDA Late Background 2": "KDA_L_BG_2.ogg",
  "KDA Late Lead": "KDA_L_L.ogg",

  "MAETRO Early Lead": "MAESTRO_E_L.ogg",
  "MAETRO Late Lead": "MAESTRO_L_L.ogg",

  "MIXMASTER Early Lead": "MIXMASTER_E_L.ogg",
  "MIXMASTER Late Lead": "MIXMASTER_L_L.ogg",

  "PENTAKILL Early Background 1": "PENTAKILL_E_BG_1.ogg",
  "PENTAKILL Early Background 2": "PENTAKILL_E_BG_2.ogg",
  "PENTAKILL Early Lead": "PENTAKILL_E_L.ogg",
  "PENTAKILL Late Background 1": "PENTAKILL_L_BG_1.ogg",
  "PENTAKILL Late Background 2": "PENTAKILL_L_BG_2.ogg",
  "PENTAKILL Late Lead": "PENTAKILL_L_L.ogg",

  "PUNK Early Background": "PUNK_E_BG.ogg",
  "PUNK Early Lead": "PUNK_E_L.ogg",
  "PUNK Late Background": "PUNK_L_BG.ogg",
  "PUNK Late Lead": "PUNK_L_L.ogg",

  "TRUEDAMAGE Early Background 1": "TRUEDAMEGE_E_BG_1.ogg",
  "TRUEDAMAGE Early Background 2": "TRUEDAMEGE_E_BG_2.ogg",
  "TRUEDAMAGE Early Lead": "TRUEDAMEGE_E_L.ogg",
  "TRUEDAMAGE Late Background 1": "TRUEDAMAGE_L_BG_1.ogg",
  "TRUEDAMAGE Late Background 2": "TRUEDAMAGE_L_BG_2.ogg",
  "TRUEDAMAGE Late Lead": "TRUEDAMAGE_L_L.ogg",
};

export type FileMapKey = keyof typeof FILE_MAP;

export const ListOfTracks = Object.keys(FILE_MAP);
