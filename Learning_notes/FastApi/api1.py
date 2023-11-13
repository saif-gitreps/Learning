from fastapi import FastAPI, Path

app = FastAPI()

students = {
    1: {
        "name" : "john",
        "age": 17,
        "class" : "year 12"
    },
    2: {
        "name" : "Carl",
        "age": 18,
        "class" : "year 16"
    }
}

@app.get("/")
def home():
    return {"name": "First Data"}

@app.get("/student")
def student_check(student_id: int):
    return students[student_id]

@app.get("/student/name")
def student_name(name: str = None):
    if name is None:
        return {"error": "not found"}
    for item in students:
        if(students[item]["name"].lower() == name.lower()):
            return students[item]
    return {"error": "not found"}

