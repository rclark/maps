# are you serious??!

## How I did this:

Step #1: Get GeoJSON data
    
    ogr2ogr -f "GeoJSON" ./happy-valley-polys.geojson PG:"host=localhost user=geology password=secret dbname=happyvalley" mapunitpolys -t_srs EPSG:4326

Step #2: Push to GitHub

    git commit -am "initial commit"
    git push

Step #3: [Profit.](https://github.com/rclark/maps/blob/master/happy-valley-polys.geojson) 
