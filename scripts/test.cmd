FOR /F "tokens=* USEBACKQ" %%F IN (`tzutil /g`) DO SET PREVIOUS_TZ=%%F
tzutil /s "GMT"
cmd.exe /c yarn test
tzutil /s "%PREVIOUS_TZ%"