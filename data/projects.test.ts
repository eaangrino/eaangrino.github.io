import {projects} from './projects';
describe('projects',()=>{it('keeps the current portfolio order and ten entries',()=>{expect(projects).toHaveLength(10);expect(projects[0].key).toBe('itemTen');expect(projects.at(-1)?.key).toBe('itemOne');});});
