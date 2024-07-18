import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '@storage/storageConfig';

import { groupsGetAll } from './groupsGetAll';

export async function groupRemoveByName(groudDeleted: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter(group => group !== groudDeleted);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groudDeleted}`);


  } catch (error) {
    throw error;
  }
}