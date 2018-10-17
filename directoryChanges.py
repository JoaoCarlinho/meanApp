import os
import shutil

#countnonPHP = 0
#countPHP = 0
countUPdates = 0
stringToConvert = '/ioservices/'
excludeFiles = ['COMMIT_EDITMSG', 'config', 'description', 'FETCH_HEAD', 'HEAD', 'index', 'ORIG_HEAD', 'applypatch-msg.sample']
#newString = '.com/'

for root, dirs, files in os.walk("."):
    for filename in files:
        #with open(os.path.join(root, file), "r") as auto:
        #newFileName = filename.replace("php", "html")
        #print('new file name: '+newFileName)
        #if (filename == newFileName):
            #countnonPHP +=1
            #print('non-PHP file -'+filename)
        #else:
            #countPHP +=1
            ##shutil.copyfile(filename, newFileName)
        if excludeFiles.count(filename) < 1:
            teams = open(filename, 'r')
            lst = teams.readlines()
            lineNumber = 0
            for line in lst:
                if ((stringToConvert in line)):
                    print('line'+str(lineNumber) + ' of '+ filename+' may need to be updated')
                    print(line)
                    teams.close()
                    #with open(filename) as f:
                        #newText=f.read().replace(stringToConvert, newString)
                    #with open(filename, "w") as f:
                        #f.write(newText)
                    countUPdates+=1
                lineNumber +=1
                #lineMod = lineNumber%20
                #if (lineMod == 0 ):
                    #print('at line'+str(lineNumber)+' of '+filename)
                    #print(line)
            teams.close()


#print(str(countPHP)+' php files found in directory')
print(str(countUPdates)+' lines need to be updated')
#print(str(countnonPHP)+' files which are not php found')

'''
with open(FileName) as f:
newText=f.read().replace('Apples', 'Oranges')
 
with open(FileName, "w") as f:
f.write(newText)

count = 0

def main():
# open file
    teams = open('WorldSeriesWinners.txt', 'r')
# get input
    who = input('Enter team name: ')
#begin search
    lst = teams.readline()
    while lst != '':
        if who in lst:
            count += 1

teams.close()
print(count)

main()
'''

