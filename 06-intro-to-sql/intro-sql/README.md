# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data).
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below
##Question :
1. Filter out specfic columns in select.

## SQL Operations
# C - reate a table
# R - ead/Filter data
# U - pdate/Change/Manage Data
# D - elete Data

## Challenges
1. Write the SQL to return all of the rows in the artists table?
```SQL
Read some rows
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"
```SQL
Read some rows
SELECT * FROM artists WHERE name LIKE "Black Sabbath";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text
```sql
creating a new table
CREATE TABLE fans (id INTEGER PRIMARY KEY, name text)
```

4. Write the SQL to alter the fans table to have a artist_id column type integer?
```sql
updated with a new column
ALTER TABLE fans ADD COLUMN artist_id INTEGER
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**
```sql
insert values
INSERT INTO fans (name, artist_id) VALUES( "Soundarya", 200);
```

7. Write the SQL to return fans that are not fans of the black eyed peas.
```sql
read
SELECT * FROM fans WHERE artist_id != 169;
```
8. remove fans from our DB
```sql
deleted the whole table.
DROP TABLE fans
DELETE FROM fans WHERE " "
```

8. Write the SQL to display an artists name next to their album title
```sql
SELECT DISTINCT artists.name, albums.title FROM artists INNER JOIN albums ON artists.id == albums.artist_id ORDER BY artists.name ASC;
```

9. Write the SQL to display artist name, album name and number of tracks on that album
```sql
```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre
```sql
```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
