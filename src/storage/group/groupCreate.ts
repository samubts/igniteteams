import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { groupsGetAll } from './groupsGetAll';
import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupCreate(newGroup: string) {
  try {

    const storedgeGroups = await groupsGetAll();

    const groupAlreadyExists = storedgeGroups.includes(newGroup);

    if(groupAlreadyExists){
      throw new AppError('Já existe um grupo cadastro com esse nome.');
    }

    const storage = JSON.stringify([...storedgeGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    
  } catch(error){
    throw error;
  }
}