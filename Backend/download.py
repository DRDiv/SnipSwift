def makeTextFile(name, content):
    file = open(f"{name}.txt","w",encoding="utf-8")   #change the directory of the text file to whatever is needed in the frontend
    file.write(f"{name} Transcript:\n")
    file.write(content)
    file.flush()
    file.close()