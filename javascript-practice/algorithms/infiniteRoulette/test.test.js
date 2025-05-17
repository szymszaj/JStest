const infiniteRouletteModule = require("./infiniteRoulette");

jest.useFakeTimers();

describe("infiniteRoulette interval", () => {
  let originalLog;

  beforeEach(() => {
    originalLog = console.log;
    console.log = jest.fn();
  });

  afterEach(() => {
    console.log = originalLog;
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  test("should call setInterval and clearInterval", () => {
    const setIntervalSpy = jest.spyOn(global, "setInterval");
    const clearIntervalSpy = jest.spyOn(global, "clearInterval");

    infiniteRouletteModule.infiniteRoulette();

    expect(setIntervalSpy).toHaveBeenCalled();

    jest.runOnlyPendingTimers();

    expect(clearIntervalSpy).toHaveBeenCalled();

    setIntervalSpy.mockRestore();
    clearIntervalSpy.mockRestore();
  });

  test('should log "The roulette game has started!"', () => {
    infiniteRouletteModule.infiniteRoulette();
    expect(console.log).toHaveBeenCalledWith("The roulette game has started!");
  });

  test('should eventually log "The roulette stopped at number:"', () => {
    infiniteRouletteModule.infiniteRoulette();
    jest.runAllTimers();
    const stopLog = console.log.mock.calls.find((call) =>
      call[0].startsWith("The roulette stopped at number:")
    );
    expect(stopLog).toBeTruthy();
  });

  test('should log "Drawn number:" multiple times', () => {
    infiniteRouletteModule.infiniteRoulette();
    jest.runAllTimers();
    const drawnLogs = console.log.mock.calls.filter((call) =>
      call[0].startsWith("Drawn number:")
    );
    expect(drawnLogs.length).toBeGreaterThan(0);
  });
});
