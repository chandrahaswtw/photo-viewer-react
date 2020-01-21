import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import useFetch from "./../Utils/Hooks/useFetch";

test("useFetch performs GET request", async () => {

  const mock = new MockAdapter(axios);

  const mockData = "response";
  const url = "http://mock";
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() => {
    return useFetch();
  })

  
   act(() => {
    result.current[1]([url])
  });

  expect(result.current[0].data).toEqual("");
  expect(result.current[0].loading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current[0].data[0].data).toEqual("response");
  expect(result.current[0].loading).toBeFalsy();
});