import * as Clipbaord from 'expo-clipboard';

 const Copy = async (text: string) => {
        await Clipbaord.setStringAsync(text);
    }



export default Copy;