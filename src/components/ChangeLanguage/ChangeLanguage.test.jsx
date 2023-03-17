import { queryByAttribute, render, screen } from "@testing-library/react"
import ChangeLanguage from "."

describe('ChangeLanguage Tests', () => {
    it('should have at least 2 flags buttons', () => {
        render(<ChangeLanguage />)
        expect(screen.getAllByRole('button').length).toBeGreaterThanOrEqual(2)
    })
})