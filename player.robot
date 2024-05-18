*** Settings ***
Library   Browser

*** Test Cases ***
Deve abrir e logar o utilizador 
    New Browser     browser=chromium    headless=False 
    New Page    https://parodify.vercel.app
    Get Text    css=.logged-user    contains    Fernando Papito

    ${play}    Set Variable
    ...    xpath=//div[contains(@class, "song")]//h6[text()="Bughium"]/...//button[contains(@class, "play")]

    Click    ${play}
    Sleep    20