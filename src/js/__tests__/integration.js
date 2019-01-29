import { execSync } from 'child_process';

describe('# sgen-react-native integration test', () => {
    beforeEach(() => {
        execSync('rm -rf testoutput');
    });

    it('## should print help options', () => {
        const output = execSync('./scripts/sgen-react-native.sh -h').toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design', () => {
        const output = execSync(
            './scripts/sgen-react-native.sh -d src/test/fixture/design.js -o testoutput'
        ).toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design with merge', () => {
        let output = execSync(
            './scripts/sgen-react-native.sh -d src/test/fixture/design.js -o testoutput --overwrite=merge'
        ).toString();
        expect(output).toMatchSnapshot();
        output = execSync(
            './scripts/sgen-react-native.sh -d src/test/fixture/design.js -o testoutput --overwrite=merge'
        ).toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design and run react-native commands', () => {
        let output = execSync(
            './scripts/sgen-react-native.sh -d src/test/fixture/design.js -o testoutput --overwrite=merge'
        ).toString();
        expect(output).toMatchSnapshot();
        output = execSync('npm install', { cwd: 'testoutput' }).toString();
        output = execSync('npm run lint', { cwd: 'testoutput' }).toString();
    });
});

describe('# sgen-react-native-nav integration test', () => {
    beforeEach(() => {
        execSync('rm -rf testoutput');
    });

    it('## should print help options', () => {
        const output = execSync('./scripts/sgen-react-native-nav.sh -h').toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design', () => {
        const output = execSync(
            './scripts/sgen-react-native-nav.sh -d src/test/fixture/nav.json -o testoutput'
        ).toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design with merge', () => {
        let output = execSync(
            './scripts/sgen-react-native-nav.sh -d src/test/fixture/nav.json -o testoutput --overwrite=merge'
        ).toString();
        expect(output).toMatchSnapshot();
        output = execSync(
            './scripts/sgen-react-native-nav.sh -d src/test/fixture/nav.json -o testoutput --overwrite=merge'
        ).toString();
        expect(output).toMatchSnapshot();
    });

    it('## should generate design and run react-native commands', () => {
        let output = execSync(
            './scripts/sgen-react-native-nav.sh -d src/test/fixture/nav.json -o testoutput --overwrite=merge'
        ).toString();
        expect(output).toMatchSnapshot();
        output = execSync('npm install', { cwd: 'testoutput' }).toString();
        output = execSync('npm run lint', { cwd: 'testoutput' }).toString();
    });
});