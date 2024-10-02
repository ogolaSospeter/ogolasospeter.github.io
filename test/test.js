const projects = require('./projects');

test('should return an array of projects', () => {
    expect(projects).toEqual(expect.arrayContaining([
        expect.objectContaining({
            title: expect.any(String),
            description: expect.any(String),
            image: expect.any(String),
            link: expect.any(String),
            github: expect.any(String)
        })
    ]));
});