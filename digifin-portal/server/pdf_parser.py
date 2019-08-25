from camelot import read_pdf
import pandas as pd
import sys

file_path = sys.argv[1]
password = sys.argv[2]

rows = read_pdf(
    file_path,
    pages='all',
    password=password,
    flavor='lattice',
    strip_text=' .\n'
    )

for i in range(0, len(rows)):
	rows_df = rows[i].df
	print (rows_df)
