
# packge install commands

--- Install pakage comand:

    > pip instal <name of the pakage>
    > pip install requests

--- Upgrade pip command:

    > pip install --upgrade pip

--- List packages command:

    > pip list

--- Install a different version command:

    > pip install requests==2.23.0
    > pip install requests==2.20.* 
    > pip install requests~=2.20.0
    > pip install requests==2.* 

--- Uninstall package command:

    > pip uninstal <name of the pakage>
    > pip uninstall requests

# Virtual Environments

--- In the project folder we use the command:

    > python -m venv <name of a folder to contain the virtual enviroment by convention we call it "env">

    > python -m venv env


    This will create a new directory with the following files and folders:
    Include
    Lib\site-packages
    Scripts
    pyvenv.cfg

    Platform        Shell               Command to activate virtual environment
    POSIX           bash/zsh            $ source <venv>/bin/activate
                    ish                 $ . <venv>/bin/activate.fish
                    csh/tcsh            $ source <venv>/bin/activate.csh
                    PowerShell Core     $ <venv>/bin/Activate.ps1
    Windows         cmd.exe             C:\> <venv>\Scripts\activate.bat
                    PowerShell          PS C:\> <venv>\Scripts\Activate.ps1

# Pipenv

--- Command to install Pipenv:

    > pip install pipenv

--- Instead of using pip to install a package we use Pipenv:

    > pipenv install <name of the packages>
    > pipenv install requests

--- After it creates the virtual enviroment use to commad to see the path, but we do not need to use this path:

    > pipenv --venv

--- To activate the virtual enviroment use the following commads, inside th folder we are working, were we have the files "Pipfile.lock" and "Pipfile":

    > pipenv shell

--- To deactivate use the following command:

    > exit

--- If we change to a different machine, with this to file just run the following comand to install the packages and its dependecies:

    > pipenv install

--- If we want to install the exact same versions, versions we need bo by pass "Pifile" and use "Pipfile.lock", with the following comand:

    > pipenv install --ignore-pipfile



# Managing Dependencies

--- Run the following command to see a list of all the installed Dependencies:

    > pipenv graph

--- In case we want to update dependencies acording to the version of our package:

    > pipenv update --outdated

--- To update all packages in our project virtual enviroment:

    > pipenv update

--- Or we can specify the name of the package:

    >pipenv update requests





