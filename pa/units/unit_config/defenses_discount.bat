@echo off


echo F|xcopy "..\land\r2_zapper_dc\r2_zapper_dc.json" "..\land\laser_defense_single\laser_defense_single.json" /Y
echo F|xcopy "..\land\r2_zapper_dc\r2_zapper_dc_icon_buildbar.png" "..\land\laser_defense_single\laser_defense_single_icon_buildbar.png" /Y

echo F|xcopy "..\land\r2_zapper_twin_dc\r2_zapper_twin_dc.json" "..\land\laser_defense\laser_defense.json" /Y
echo F|xcopy "..\land\r2_zapper_twin_dc\r2_zapper_twin_dc_icon_buildbar.png" "..\land\laser_defense\laser_defense_icon_buildbar.png" /Y

echo F|xcopy "..\land\r2_pelter_dc\r2_pelter_dc.json" "..\land\artillery_short\artillery_short.json" /Y
echo F|xcopy "..\land\r2_pelter_dc\r2_pelter_dc_icon_buildbar.png" "..\land\artillery_short\artillery_short_icon_buildbar.png" /Y

echo F|xcopy "..\land\r2_galate_dc\r2_galate_dc.json" "..\land\air_defense\air_defense.json" /Y
echo F|xcopy "..\land\r2_galate_dc\r2_galate_dc_icon_buildbar.png" "..\land\air_defense\air_defense_icon_buildbar.png" /Y

echo F|xcopy "..\land\r2_radar_dc\r2_radar_dc.json" "..\land\radar\radar.json" /Y
echo F|xcopy "..\land\r2_radar_dc\r2_radar_dc_icon_buildbar.png" "..\land\radar\radar_icon_buildbar.png" /Y



echo Discount Defenses - unit files updated.
pause
