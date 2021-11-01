/*  Unit Testing: Mocks Challenge
*
*   1. Clean up the test below and remove unused pieces
*   2. Write a test that test getMyFullUserData gets the provided user data
*/

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
        it('passes id to get user', async () => {
            // arrange
            mockUserService.lastId = null;

            // act
            await model.getMyFullUserData();
            
            // assert
            expect(mockUserService.lastId).toBe(1);
        });
        
        it('gets full user data', async () => {
            // arrange
             mockUserService.user = new User({ 
                    firstName: 'Dollan', 
                    middleName: 'Coding Go', 
                    lastName: 'Noneya', 
                    id: 2 
            });
            
            // act
            const result = await model.getMyFullUserData();
            
            // assert
            expect(result.id).toBe(2);
            expect(result.firstName).toBe('Dollan');
        });
    });
});
