import { createContext } from 'react';
import { treeService } from '../services/treeService';

const serviceContext = createContext(treeService);

export { serviceContext };