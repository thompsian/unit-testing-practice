//  Unit Testing: Mocks

// Test Suite 
describe(`${User.name} Class`, () => {
    let model;
    let mockUserService;
    
    beforeEach(() => {
        mockUserService = {
            lastId: null,
            user: {},
            getUserById(id) {
                this.lastId = id;
                
                return this.user;
            }
        };
        const data = { firstName: 'Dylan', middleName: 'Christopher', lastName: 'Israel', id: 1 };
        model = new User(data, mockUserService);
    });

    describe('getMyFullUserData', () => {
        it('gets user data by id', async () => {
            // arrange
            mockUserService.lastId = null;
            mockUserService.user = new User(
                {firstName: 'Dollan', middleName: 'Coding God', lastName: 'Noneya', id: 2 }
                )
            // act
            const result = await model.getMyFullUserData();
            
            // assert
            expect(mockUserService.lastId).toBe(1);
        });
    });
});