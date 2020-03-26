# Check if variable is created
if [ -z "$SIM" ]; then
    echo "Script exit because simulator env variable is missing"
fi

# Stop all simulators
killall "Simulator"

# Find UUID 
ios_device_uuid=$(xcrun instruments -s| grep "$SIM" | grep -E -o -i "([0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12})")

# Device type and UUID
echo "Device type: $SIM and UIID: $ios_device_uuid"

# Launch device and wait for the process to finish
xcrun simctl boot $SIM
open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/ & 
PROCESS_ID=$!
wait $PROCESS_ID

# Remove app 
xcrun simctl uninstall booted nmf.earth


