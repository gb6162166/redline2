var newBuild = {

	"/pa/units/land/ultra_dox/ultra_dox.json": ["bot", 1001, { row: 0, column: 1 }],
	"/pa/units/land/ultra_grenadier/ultra_grenadier.json": ["bot", 1002, { row: 0, column: 2 }],
	"/pa/units/land/ultra_spark/ultra_spark.json": ["bot", 1005, { row: 0, column: 5 }],
	"/pa/units/land/ultra_stinger/ultra_stinger.json": ["bot", 1006, { row: 0, column: 6 }],
	"/pa/units/land/ultra_slammer/ultra_slammer.json": ["bot", 1013, { row: 0, column: 3 }],
	"/pa/units/land/ultra_bluehawk/ultra_bluehawk.json": ["bot", 1014, { row: 0, column: 4 }],
	"/pa/units/land/ultra_boom/ultra_boom.json": ["bot", 1016, { row: 1, column: 6 }],
	
	"/pa/units/land/boss_doxer/boss_doxer.json": ["boss bot", 1201, { row: 0, column: 0 }],	
	"/pa/units/land/boss_sparkie/boss_sparkie.json": ["boss bot", 1202, { row: 1, column: 0 }],	
	
	
	"/pa/units/land/ultra_ant/ultra_ant.json": ["vehicle", 2001, { row: 0, column: 1 }],
	"/pa/units/land/ultra_inferno/ultra_inferno.json": ["vehicle", 2002, { row: 0, column: 2 }],
	"/pa/units/land/ultra_spinner/ultra_spinner.json": ["vehicle", 2004, { row: 0, column: 4 }],
	"/pa/units/land/ultra_drifter/ultra_drifter.json": ["vehicle", 2005, { row: 0, column: 5 }],
	
	"/pa/units/land/land_echo/land_echo.json": ["vehicle", 2006, { row: 0, column: 6 }],

	"/pa/units/land/aa_drifter/aa_drifter.json": ["vehicle", 2015, { row: 1, column: 5 }],
	"/pa/units/land/ultra_leveler/ultra_leveler.json": ["vehicle", 2103, { row: 0, column: 3 }],
	
	
	"/pa/units/land/boss_drifter/boss_drifter.json": ["boss vehicle", 2210, { row: 1, column: 0 }],	
	"/pa/units/land/boss_stryker/boss_stryker.json": ["boss vehicle", 2220, { row: 2, column: 0 }],	
		
	
	
	"/pa/units/air/ultra_phoenix/ultra_phoenix.json": ["air", 3101, { row: 0, column: 1 }],
	"/pa/units/air/ultra_kestrel/ultra_kestrel.json": ["air", 3102, { row: 0, column: 2 }],
	"/pa/units/air/ultra_horsefly/ultra_horsefly.json": ["air", 3103, { row: 0, column: 3 }],
	"/pa/units/air/ultra_pelican/ultra_pelican.json": ["air", 3104, { row: 0, column: 4 }],	
	"/pa/units/air/ultra_icarus/ultra_icarus.json": ["air", 3105, { row: 0, column: 5 }],		
	
	"/pa/units/air/boss_kestrel/boss_kestrel.json": ["boss air", 3201, { row: 0, column: 0 }],
	"/pa/units/air/boss_icarus/boss_icarus.json": ["boss air", 3202, { row: 1, column: 0 }],
	"/pa/units/air/boss_pelican/boss_pelican.json": ["boss air", 3203, { row: 2, column: 0 }],
	
	
	"/pa/units/sea/swordfish/swordfish.json": ["sea", 4001, { row: 0, column: 1 }],
	"/pa/units/sea/ultra_orca/ultra_orca.json": ["sea", 4002, { row: 0, column: 2 }],
	"/pa/units/sea/ultra_piranha/ultra_piranha.json": ["sea", 4004, { row: 0, column: 4 }],
	
	"/pa/units/sea/megalodon/megalodon.json": ["sea", 4105, { row: 1, column: 5 }],
	
	
	"/pa/units/land/artillery_spider_launcher/artillery_spider_launcher.json": ["combat", 5105, { row: 1, column: 5 }],
	"/pa/units/land/artillery_grenadier_launcher/artillery_grenadier_launcher.json": ["combat", 5007, { row: 0, column: 5 }]
	

}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}