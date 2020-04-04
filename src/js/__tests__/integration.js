import { execSync } from 'child_process';

describe('# sgen-react-native integration test', () => {
    beforeEach(() => {
        execSync('rm -rf testoutput');
    });

    it('## should print help options', () => {
        const output = execSync('sgen -g `pwd`/dist/react-native.min.js -h').toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design', () => {
        const output = execSync(
            'sgen -g `pwd`/dist/react-native.min.js -d src/test/fixture/design.json -o testoutput'
        ).toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design and run react-native commands', () => {
        let output = execSync('sgen -g `pwd`/dist/react-native.min.js -d src/test/fixture/design.json -o testoutput').toString();
        output = output.replace(/info: Loaded generator .*react-native.min.js.*/, '');
        output = output
            .replace(/warn: Please cherrypick changes from master-sgen-generated from .*/, '')
            .replace(/info: git cherry-pick .*/, '');
        expect(output).toMatchSnapshot();
        output = execSync('npm install', { cwd: 'testoutput' }).toString();
        output = execSync('npm run lint', { cwd: 'testoutput' }).toString();
    });
});

