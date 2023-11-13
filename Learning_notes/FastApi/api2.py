from fastapi import FastAPI
from typing import Optional
import json


file = "database.json"

app = FastAPI()

@app.get("/view")
def view_data():
    with open(file,"r") as File:
        data = json.load(File)
    return data

@app.post("/add")
def add_data(title: str, body: Optional[str] = None):
    with open(file,"r") as File:
        data = json.load(File)
        data.append({title: body})
    with open(file,"w") as File:
        json.dump(data,File)
    return {"status": "success"}


