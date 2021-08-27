# Data integration and exploration
Data integration, cleaning and exploration project made in Python and Jupyter Notebook under the university course 'Databases theory and application'.

## Functionality:
This project was made in Jupyter Notebook IDE using various Python connections to the various data sources:
*  **pyxf** for Flora-2 and deductive DB
*  **sqlalchemy** for Postgres DB
*  **pyexistdb** for XML DB
*  **ZODB** for object-oriented DB
*  **neo4j** for graph DB
*  **pymongo** for NoSQL MongoDB

and **Pandas** module at the end for structuring the data and data exploration. One part of the data was also visualised using **networkx**, **matplotlib** and **geopandas** modules.

After connecting to each of these data sources, there was a need for making one persistend connection with the data source in order to maintain the stream of the data. After that, it was very important to detect how the data in various databases was structured. At the end, data was collected, integrated in one dataframe and analysed in Pandas.
