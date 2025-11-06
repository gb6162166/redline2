@echo off


echo F|xcopy "..\land\r2_zapper\r2_zapper.json" "..\land\laser_defense_single\laser_defense_single.json" /Y
echo F|xcopy "..\land\r2_zapper\r2_zapper_icon_buildbar.png" "..\land\laser_defense_single\laser_defense_single_icon_buildbar.png" /Y

echo F|xcopy "..\land\r2_zapper_twin\r2_zapper_twin.json" "..\land\laser_defense\laser_defense.json" /Y
echo F|xcopy "..\land\r2_zapper_twin\r2_zapper_twin_icon_buildbar.png" "..\land\laser_defense\laser_defense_icon_buildbar.png" /Y

echo F|xcopy "..\land\r2_pelter\r2_pelter.json" "..\land\artillery_short\artillery_short.json" /Y
echo F|xcopy "..\land\r2_pelter\r2_pelter_icon_buildbar.png" "..\land\artillery_short\artillery_short_icon_buildbar.png" /Y

echo F|xcopy "..\land\r2_galate\r2_galate.json" "..\land\air_defense\air_defense.json" /Y
echo F|xcopy "..\land\r2_galate\r2_galate_icon_buildbar.png" "..\land\air_defense\air_defense_icon_buildbar.png" /Y

echo F|xcopy "..\land\r2_radar\r2_radar.json" "..\land\radar\radar.json" /Y
echo F|xcopy "..\land\r2_radar\r2_radar_icon_buildbar.png" "..\land\radar\radar_icon_buildbar.png" /Y



echo Full Price Defenses - unit files updated.
pause
