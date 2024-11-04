function MedalForm({ medals, handleInputChange, addCountry, updateCountry }) {
  return (
    <form onSubmit={addCountry}>
      <input
        type="text"
        name="country"
        placeholder="국가 입력"
        value={medals.country}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="gold"
        value={medals.gold}
        onChange={handleInputChange}
        placeholder="금메달 수"
        required
      />
      <input
        type="number"
        name="silver"
        value={medals.silver}
        onChange={handleInputChange}
        placeholder="은메달 수"
        required
      />
      <input
        type="number"
        name="bronze"
        value={medals.bronze}
        onChange={handleInputChange}
        placeholder="동메달 수"
        required
      />
      <button className="추가">국가 추가</button>
      <button type="button" className="업데이트" onClick={updateCountry}>
        업데이트
      </button>
    </form>
  );
}

export default MedalForm;
